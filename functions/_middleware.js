export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname === 'emd-cafe-de-lupin.pages.dev' ||
    url.hostname === 'www.cafe-de-lupin.fr'
  ) {
    url.hostname = 'cafe-de-lupin.fr';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
