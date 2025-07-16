import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-black hover:bg-gray-800",
            footerActionLink: "text-black hover:text-gray-800",
          },
        }}
      />
    </div>
  );
}
