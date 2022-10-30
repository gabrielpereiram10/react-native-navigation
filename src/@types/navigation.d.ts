import { ScreenBParams, TabRoutes } from "./route-params"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            screenA: undefined
            screenB: ScreenBParams
            tabRoutes: TabRoutes
        }
    }
}