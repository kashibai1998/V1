import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataSelector, fetchData } from "../../redux/ApiData";
// import { increment, decrement } from "../../redux/CounterSlice";

const ReduxComponent = () => {
    const dispatch = useDispatch();
    // const count = useSelector((state) => state.counter.count);
    const isLoading = useSelector((state) => state.apiData.isLoading);
    const hasError = useSelector((state) => state.apiData.hasError);
    const data = useSelector((state) => state.apiData.data);
    
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    const renderRecipes = () => {
        if (isLoading) return <p>Loading recipes...</p>
        if (hasError) return <p>Cannot display recipes...</p>

        return data.map(recipe =>
            <div key={recipe.idMeal}>
                <h2>{recipe.strMeal}</h2>
                {/* <img src={recipe.strMealThumb} alt='' /> */}
            </div>
        )
    }

    return (
        <div>
            Hii Redux Component
            {/* <h1>Counter is :{count}</h1>
            <button onClick={() => { dispatch(increment()) }}>increment</button>
            <button onClick={() => { dispatch(decrement()) }}>decrement</button>
            <h2>Hiiiii</h2> */}
            {/* <h1>{data[0].sha}</h1> */}
            {/* <button onClick={() => { dispatch(dataIsSuccess()) }}>GetFromRedux</button>
            {dataIsSuccess} */}

            <h1>Recipes</h1>
            <div>
                {renderRecipes()}
            </div>
        </div>
    )
}
export default ReduxComponent;