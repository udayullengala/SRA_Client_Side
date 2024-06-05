import React from 'react'

const Home = () => {

    return (
        <>
            <style>
                {`
                    /* Medium screens: 3 columns */
                    @media (max-width: 992px) {
                        .player-card-parent {
                            grid-template-columns: repeat(3, 1fr) !important;
                        }
                    }
                    
                    /* Small screens: 2 columns */
                    @media (max-width: 768px) {
                        .player-card-parent {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    
                    /* Extra small screens: 1 column */
                    @media (max-width: 576px) {
                        .player-card-parent {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}
            </style>
            <div className="container my-3">
                <div className="row">
                    <div className="col-8">
                        <div className="player-card-parent" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px'}}>
                            {
                                Array.apply(null, Array(10)).map((cur, index) => {
                                    return (
                                        <>  
                                            <div className="player" style={{width: '100px', justifyContent: 'center', alignItems: 'center'}}>
                                                <div className='player-img' style={{width: '100px', height: '100px', border: '1px solid #ccc', borderRadius: '7px', background: `url('https://e1.pxfuel.com/desktop-wallpaper/838/654/destop-wallpaper-hyper-gaming-logo-gaming-profile-thumbnail.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                                                <div className="player-info text-center" style={{marginTop: '10px'}}>
                                                    <h6 title='' style={{marginBottom: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Player {index}</h6>
                                                    <span title='' style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>$10</span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="list-of-users" style={{width: '90%', height: '500px', border: '1px solid #ccc', borderRadius: '7px', position: 'relative'}}>
                            <div className="heading" style={{borderBottom: '1px solid #ccc', position: 'sticky', left: '0px', top: '0px', background: '#fff', padding: '15px 15px 0px'}}>
                                <h6>Online Friends: 0/69</h6>
                            </div>
                            <div className="list" style={{marginTop: '20px', padding: '0px 15px 15px', height: '380px', overflow: 'auto'}}>
                                {
                                    Array.apply(null, Array(10)).map((cur, index) => {
                                        return <>
                                            <div className="player" style={{display: 'flex', justifyContent: 'start', alignItems: 'start', gap: '10px', marginBottom: '15px'}}>
                                                <div className='player-img' style={{width: '100px', height: '100px', border: '1px solid #ccc', borderRadius: '7px'}}></div>
                                                <div className='player-info'>
                                                    <h6 style={{marginBottom: '3px'}}>Player here 0</h6>
                                                    <span title='' className='d-block' style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Offline</span>
                                                    <span title='' className='d-block' style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>$10</span>
                                                </div>
                                            </div>
                                        </>
                                    })
                                }
                                
                            </div>
                            <div style={{position: 'absolute', bottom: '0px', padding: '0px 15px', margin: '10px 0px', width: '100%'}}>
                                <div className="action-btn" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <a href="" style={{padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', textDecoration: 'none'}}>Team-up Lobby</a>
                                    <a href="" style={{padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', textDecoration: 'none'}}>Invite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home