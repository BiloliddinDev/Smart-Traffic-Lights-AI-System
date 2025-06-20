import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.tsx";

export const ProtectedRoute = ({
                                   children,
                                   roles = [],
                               }: {
    children: React.ReactNode;
    roles?: ("admin" | "user")[];
}) => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" />;
    if (roles.length > 0 && !roles.includes(user!.role)) return <Navigate to="/login" />;

    return <>{children}</>;
};
