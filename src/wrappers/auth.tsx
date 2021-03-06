import React from 'react';
import { Redirect } from 'umi';
import useAuth from '../customHook/useAuth';

/**
 * 路由的权限校验
 */
export default (props: any) => {
    const isLogin: boolean = useAuth();
    if (isLogin) {
        return <div>{props.children}</div>;
    } else {
        return <Redirect to="/login" />;
    }
};
