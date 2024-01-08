const pageMap = {
  '/home': 'PROPERTY_SEARCH',
  '/property-search': 'PROPERTY_SEARCH',
  '/access-request': 'ACCESS_REQUEST',
  '/user-management': 'USER_ACCESS',
  '/dashboard': 'DASHBOARD',
};

const hasPageAccess = (path, modules) => {
  const pageModule = Object.keys(pageMap).find((page) => path === page);
  const hasMatch = modules.filter((item) => pageMap[pageModule] === item);
  return hasMatch.length > 0;
};

function redirectUrl(ctx, url) {
  if (ctx.res) {
    ctx.res.writeHead(302, { // or 301
      Location: url,
    });
    ctx.res.end();
  }
}

function checkAuthorization(ctx, currentPath, userInfo) {
  const hasAccessToPage = hasPageAccess(currentPath, userInfo?.permissions);
  if (!hasAccessToPage) {
    redirectUrl(ctx, '/');
  }
  return true;
}

export default checkAuthorization;