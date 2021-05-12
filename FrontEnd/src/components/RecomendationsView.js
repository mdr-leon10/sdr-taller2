import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import RecomendationCard from './RecomendationsCard';
import Circle from './Circle';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useParams } from 'react-router';

const url = process.env.REACT_APP_BASE_URL;
var idUser = '';
export default function MainRecomendationsView(props) {
    var { card1Title, card2Title, showCard2, showContextButton } = props
    const [state, setState] = useState({
        dataModel: undefined,
        dataModelWeekend: undefined,
        dataOriginal: undefined
    });
    const [isWeek, setIsWeek] = useState(true);
    let { userid } = useParams();
    useEffect(() => {

        if (card1Title === "SVD model") {
            axios.get(url + '/svd', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataModel = response.data
                    setState(prev => ({
                        ...prev,
                        dataModel,
                    }))
                })
            axios.get(url + '/original', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataOriginal = response.data
                    setState(prev => ({
                        ...prev,
                        dataOriginal,
                    }))
                })
        }
        else if (card1Title === "Context Aware model") {
            axios.get(url + '/context', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataModel = response.data
                    setState(prev => ({
                        ...prev,
                        dataModel,
                    }))
                })
            axios.get(url + '/contextW', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataModelWeekend = response.data
                    setState(prev => ({
                        ...prev,
                        dataModelWeekend,
                    }))
                })
            axios.get(url + '/original', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataOriginal = response.data
                    setState(prev => ({
                        ...prev,
                        dataOriginal,
                    }))
                })
        }
        else if (card1Title === "Hybrid model") {
            axios.get(url + '/hybrid', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataModel = response.data
                    setState(prev => ({
                        ...prev,
                        dataModel,
                    }))
                })
            axios.get(url + '/original', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataOriginal = response.data
                    setState(prev => ({
                        ...prev,
                        dataOriginal,
                    }))
                })
        }
        else if (card1Title === "Online recomendations") {
            axios.get(url + '/online', {
                params: {
                    id: userid
                }
            })
                .then(response => {
                    console.log(response)
                    const dataModel = response.data
                    setState(prev => ({
                        ...prev,
                        dataModel,
                    }))
                })
        }
    }, [])

    return (

        <div>
            <NavBar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "2%" }}>
                <div style={{ flexDirection: "column", flexGrow: "1.5" }}>

                    <div style={{ margin: "2.5%" }}>
                        <RecomendationCard cardTitle={card1Title} data={isWeek ? state.dataModel : state.dataModelWeekend} />
                    </div>
                </div>

                {showCard2 && (<div style={{ flexDirection: "column", flexGrow: "1.5" }}>
                    <div style={{ margin: "2.5%" }}>
                        <RecomendationCard cardTitle={card2Title} data={state.dataOriginal} />
                    </div>
                </div>)}

                <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10% 0% 0% 0%" }}>
                        {isWeek && <Circle circleText={state.dataModel && state.dataModel.ap} />}
                        {isWeekend && <Circle circleText={state.dataModelWeekend && state.dataModelWeekend.ap} />}
                        <div style={{ marginTop: "10%" }}>
                            {showContextButton && (
                                <Button variant="contained" color="primary" onClick={() => setIsWeek(prev => !prev)}>
                                    {isWeek ? 'Displaying Week' : 'Displaying Weekend'}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}