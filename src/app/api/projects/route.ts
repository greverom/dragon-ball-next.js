

export const GET = () => {
  return Response.json([
    {
        name: "proyecto 1",
        description: "Primer proyecto en Next.js"
    },
    {
        name: "proyecto 2",
        description: "Segundo proyecto en Next.js"
    }
  ])
}
