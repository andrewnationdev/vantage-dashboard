import { IFooter } from "../types/types";

export default function AppFooter(props: IFooter) {
    return <footer className="flex justify-center text-center">
        <p className="text-slate-100">© {props.year} - Todos os Direitos Reservados. Desenvolvido por
            <a href="https://andrewnationdev.vercel.app/" className="text-sky-300 hover:text-sky-100 ml-2">AndrewNation</a>
        </p>
    </footer>
}