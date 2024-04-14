export function configureSWRHeaders(event) {
  setHeader(event, 'Cache-Control', 's-maxage=10, stale-while-revalidate')
}
