import createMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

export default createMiddleware({
  locales,
  defaultLocale: "en",
});

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(id|en)/:path*"],
// };

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
