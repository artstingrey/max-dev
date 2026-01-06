export const getViewTransitionName = (
  domain: string,
  element: string,
  id: string,
) => {
  return [domain, element, id].join('-')
}
