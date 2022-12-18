type RoutesType = {
  home: {
    title: string
    path: string
  }
  docs: {
    title: string
    path: string
  }
}

export const ROUTES: RoutesType = {
  home: {
    title: 'Início',
    path: '/',
  },
  docs: {
    title: 'Meus documentos',
    path: '/documentos',
  },
}
