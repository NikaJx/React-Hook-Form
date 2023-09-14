import AuthForm from '../auth-form/AuthForm';
import './AuthPage.css';

const AuthPage: React.FC = () => {
    return (
        <div className="auth-page">
            <AuthForm />
        </div>
    );
};

export default AuthPage;
