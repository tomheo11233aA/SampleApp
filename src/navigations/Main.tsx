import { useAppSelector } from "@hooks/redux";
import { isLoginUserSelector } from "@redux/selector/appSelector";
import React from "react";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import Box from "@common/Box";
import { StatusBar } from "react-native";
import { themeUserSelector } from "@redux/selector/appSelector";

const Main = () => {
    const isLogin = useAppSelector(isLoginUserSelector)
    const theme = useAppSelector(themeUserSelector)
    return (
        <>
            <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme === 'dark' ? '#1F222A' : '#fff'}
            />
            <Box
                flex={1}>
                {isLogin ? <AuthNavigation /> : <UnAuthNavigation />}
            </Box>
        </>
    );
}

export default Main;