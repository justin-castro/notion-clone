'use client'
import { SignedIn, useUser, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

/**
 * The main header component for the app.
 * 
 * Displays the user's first name (if signed in) and a signin button (if signed out).
 * 
 * @returns The header component.
 */
function Header() {
  const {user} = useUser();
  return (
    // The header is a flexbox with items aligned to the left and right
    // and it contains a h1 with the user's name and a signin button
    <div className="flex items-center justify-between p-5">
      {/* // If the user is signed in, we display their first name */}
      {user && (
        <h1 className="text-2xl">{user?.firstName}
          {`'s`} Space</h1>
      )}
      
      {/* // Breadcrumb */}
      {/* // TODO: Add breadcrumb component */}

      {/* // Sign in button */}
      <div>
        {/* // If the user is signed out, we display a signin button */}
        <SignedOut>
          <SignInButton />
        </SignedOut>

        {/* // If the user is signed in, we display a user button with their first name */}
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
  )
}

export default Header