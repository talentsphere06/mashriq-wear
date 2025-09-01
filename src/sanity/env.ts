export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'skz19cNeuz4NP3dI65JRcAOUEL7D1Zc01ib36WUTZ6l5FguQtOKrEyVL0qN97xmnWdAmhlgELpiyLAsZiLEEZXIfQKdYgxAAa61e6MrOTbP5zKs9KqTerxjDMKLbxCpr2q3AV8ETeqxdPp9OJDTzufBNqDOCZHxNBTaa3Y8lX8uiG2G0fazx',
  'Missing environment variable: SANITY_API_KEY'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
