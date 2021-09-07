import React from 'react'
import {userContext, channelContext} from '../App'

function ComponentC() {
    return (
        <div>
            <userContext.Consumer>
            {
                user => {
                return (
                <channelContext.Consumer>
                    {
                        proession =>{
                        return <div>user context value {user}, Profession value {proession}</div>
                        }
                    }
                
                </channelContext.Consumer>
                )
                }
            }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC
