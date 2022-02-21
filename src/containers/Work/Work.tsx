import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchWorkData } from "../../store/work/actions";

const Work = () : JSX.Element => {
    const dispatch = useAppDispatch();

    const works  = useAppSelector((state) => state.work);

    useEffect(() => {
        dispatch(fetchWorkData());
    }, [dispatch]);

    useEffect(() => {
        console.log(works);
    }, [works]);
    
    return (
        <h1> Test </h1>
    )
}

export default Work;