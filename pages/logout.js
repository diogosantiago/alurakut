import { useRouter } from 'next/router';
import nookies from "nookies";
import { useEffect } from "react";

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        nookies.destroy(null, "USER_TOKEN")
        setTimeout(() => {
            router.push("/login");
        }, 2 * 1000) // 5 segundos
    }, [])
    return      <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <div className="loginScreen">
      <section className="logoArea">
        <img src="https://alurakut.vercel.app/logo.svg" />

        <p><strong>Você foi deslogado</strong> Obrigado por usar nosso site você será redirecionado.</p>
      </section>
      </div>
</main>
}