const breakpoints = [
  { key: 'xs', value: '0px' },
  { key: 'sm', value: '600px' },
  { key: 'md', value: '900px' },
  { key: 'lg', value: '1200px' },
  { key: 'xl', value: '1536px' },
]

/** Função que retorna os breakpoints para responsividade */
export const useBreakpoints = ({ key: key }) => {
  const bk = breakpoints.filter(b => b.key === key)
  if (!bk) throw new Error('The key is not supported. Use XS, SM, MD, LG or XL')
  return bk[0].value
}
