import React from "react";

export interface Route {
    path: String;
    title?: String;
    component: React.ComponentType;
}
