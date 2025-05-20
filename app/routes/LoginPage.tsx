export default function LoginPage() {
  return (
    <div className="flex h-screen w-full bg-[#fdf6e3]">
      {/* Left side - Login Form */}
      <div className="flex w-1/2 items-center justify-center bg-[#fdf6e3]">
        <div className="w-[400px] max-w-[80%]">
          <h1 className="mb-10 text-3xl font-bold text-[#111]">Let&apos;s Get Started</h1>

          <div className="mb-6">
            <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-wide text-[#666]">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-[#ccc] bg-transparent px-4 py-3 focus:border-[#0099ff] focus:outline-none  text-black"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="mb-1 block text-xs uppercase tracking-wide text-[#666]">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-[#ccc] bg-transparent px-4 py-3 focus:border-[#0099ff] focus:outline-none  text-black"
            />
          </div>

          <button className="mb-4 w-full rounded-lg bg-[#0099ff] py-3 text-center font-medium text-white transition-colors hover:bg-[#0088ee]">
            LOGIN
          </button>

          <div>
            <a href="#" className="text-sm text-[#666] hover:text-[#0099ff]">
              Forget Your Password?
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="flex w-1/2 items-center justify-center bg-[#69b9e7] rounded-l-3xl">
          <div className="relative mx-auto">
            <img src="/club-character.png" alt="Club character" className="object-contain h-[500px] w-[625px]" />
          </div>
      </div>
    </div>
  )
}
