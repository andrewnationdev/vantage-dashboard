import { ICardsRowComponent } from "../types/types";
import StatsCardComponent from "./card";

export default function FinancialCardsRowComponent(props: ICardsRowComponent) {
    return <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {props?.data?.length > 0 &&
            props.data?.map((item, index) => <StatsCardComponent
                title={item.title}
                value={item.value}
                type={"balance"}
                description={item.description} />)}
    </section>
}