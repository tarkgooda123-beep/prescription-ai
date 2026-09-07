import { generateObject } from 'ai'
import { z } from 'zod'

export const maxDuration = 30

const medicineSchema = z.object({
  found: z.boolean().describe('whether this looks like a real medicine'),
  name: z.string().describe('the medicine brand/name'),
  genericName: z.string().describe('active ingredient / generic name'),
  category: z.string().describe('drug category, short'),
  usage: z.string().describe('what it is commonly used for, one short sentence'),
  currentPrice: z.string().describe('approximate current retail price with currency'),
  alternatives: z
    .array(
      z.object({
        name: z.string(),
        price: z.string().describe('approximate price with currency'),
        note: z.string().describe('very short note, e.g. same active ingredient'),
      }),
    )
    .max(5),
})

export async function POST(req: Request) {
  const { query, language } = await req.json()

  if (!query || typeof query !== 'string') {
    return Response.json({ error: 'invalid query' }, { status: 400 })
  }

  try {
    const { object } = await generateObject({
      model: 'google/gemini-2.5-flash',
      schema: medicineSchema,
      prompt: `You are a pharmacy assistant. Provide information about the medicine: "${query}".
Respond with ALL text fields written in the language with code "${language}".
Give an approximate current retail price (note prices vary by country/region) and up to 5 available alternatives with the same or similar active ingredient, each with an approximate price.
If the query is not a recognizable medicine, set found=false and leave other fields as best-effort or empty.
Keep every text field concise and easy to read for elderly, non-technical users.`,
    })

    return Response.json(object)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.log('[v0] search-medicine error:', message)
    const needsBilling = /credit card|billing|free credits|payment/i.test(message)
    return Response.json(
      { error: needsBilling ? 'ai_not_configured' : 'generation_failed' },
      { status: needsBilling ? 503 : 500 },
    )
  }
}
