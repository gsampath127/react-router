# <Router> : all componets are wrapped inside it and its main
# <Route> : We declare routes in Router component. Below are thr props
#        path : on what path of app the route is located
#        component: display a specific component on our path
#        render : specify a condition to render a component
#        path="*" : can redirect to not found component specified
# <Switch>: The Switch component will only render the first route that matches the path, it will not look for any other matches
# <Link>: Provides accesible navigations to specifc components/pages. Below are props
#      to : specifies link location (path)
#      component: component to be loaded
# <NavLink>: NavLink component which is helpful in the event that we want to apply some special styles.
#      activeStyle: specified styles are applied when the link was active
#      activeClassName: specified class name was applied when the link was active.
# <Redirect>: redirect to any public route. Ex: check if user is authenticated or not, if no redirect to other component

# useHistory Hook : to get history data like location, tells about where the cuser currenty is..
#    1. history.push: We can push users from on page to other page using history.push
#    2. history.replace : which also accepts a path value, but clears out everything in history

# useLocation Hook: useLocation hook includes all of the same information that the useHistory hook does.
# useParams Hook: access any route params of a declared route with its associated component using useParams Hook
# useRouteMatch Hook: If we want to know whether the given component is on a certain page
#           ex: const isBlogPostRoute = useRouteMatch("/blog/:postSlug");
    