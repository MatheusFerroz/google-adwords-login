import { GoogleButton } from "@/components/GoogleButton";

const Index = () => {
  const handleGoogleConnect = () => {
    const googleOAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth?" +
      "client_id=577879283358-dcorlsj6u4t0bjsj95vdqng9qrhqv8g.apps.googleusercontent.com&" +
      "redirect_uri=https://oauth.n8n.cloud/oauth2/callback&" +
      "response_type=code&" +
      "scope=https://www.googleapis.com/auth/adwords&" +
      "access_type=offline&" +
      "prompt=consent";
    
    window.location.href = googleOAuthUrl;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-foreground mb-4">
            Conecte sua conta
          </h1>
          <p className="text-muted-foreground text-lg">
            Faça login com sua conta Google para continuar
          </p>
        </div>
        
        <GoogleButton onClick={handleGoogleConnect} />
        
        <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
          Ao conectar, você concorda com os nossos termos de serviço e política de privacidade.
        </p>
      </div>
    </div>
  );
};

export default Index;
