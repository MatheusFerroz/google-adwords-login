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

// src/pages/Index.tsx
return (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
    <div className="text-center">
      {/* ...seu título e texto... */}
      <GoogleButton onClick={handleGoogleConnect} />
      {/* ... */}
    </div>
  </div>
);


export default Index;
