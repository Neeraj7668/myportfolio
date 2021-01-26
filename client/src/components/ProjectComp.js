import React from 'react'
import Modal from 'react-modal';
import git from "../images/git.png"
const modalStyles = {
    overlay: {
        zIndex: 2000,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: 2000,
        padding: '0px',
        borderRadius: '0px',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');


class ProjectComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: ['All', 'Web'],
            selectedItem: 'All',
            projectItem: null,
            isDialogOpen: false,
        }
    }

    componentDidMount() {
        // this.props.fetchProjects();
    }

    setSelectedTab = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    renderProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    var type = item.type;
                    var tabItem = this.state.selectedItem;

                    if (type.includes(tabItem)) {
                        return (
                            <div>{this.renderProjectItems(item)}</div>
                        );
                    }
                })
            )
        }
    }

    renderProjectItems = (item) => {
        return (
            <div className="projects-card-item">
                <div className={'div-thumb-overlay'}>
                    <div className={'overlay-item-container'}>
                        <div className={'overlay-project-div'}>
                            <p className={'project-title'}>Project Title</p>
                            <div className={'project-readmore-container'} onClick={this.onSetProjectDialogState.bind(this, true, item)}>
                                <span className={'project-readmore-text'}>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={git} className={'projects-thumb-img'} onClick={this.onSetProjectDialogState.bind(this, true, item)} />
            </div>
        )
    }

    renderAllProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    return (
                        <div>{this.renderProjectItems(item)}</div>
                    );
                })
            )
        }
    }

    onSetProjectDialogState = (isShow, item) => {
        this.setState({
            isDialogOpen: isShow,
            projectItem: item
        })
    }

    openProjectDialog = () => {
        var isShow = this.state.isDialogOpen;
        var item = this.state.projectItem;

        if (isShow) {
            return (
                <Modal
                    isOpen={isShow}
                    style={modalStyles}
                    onRequestClose={this.onSetProjectDialogState.bind(this, false)}
                    closeTimeoutMS={200}>
                    <div className={'project-modal-container'}>
                        <img  className={'project-modal-thumb'} />
                        <div className={'project-modal-content-container'}>
                            <span className={'project-modal-title'}>Project Title</span>
                            <p className={'project-modal-description'}>Descrption</p>
                            <p className={'tech-stack-text'}>Technology Stack</p>
                            <div className={'project-modal-tech-container'}>
                                
                                    <div  className={'tech-container-div'}>
                                        <span className={'tech-span'}></span>
                                    </div>
                               
                            </div>
                            <div className={'project-footer-modal'}>
                                <div className={'close-site-div'} onClick={this.onSetProjectDialogState.bind(this, false)}>
                                    <img src={git} className={'close-site-icon'} />
                                    <span className={'close-site-text'}>CLOSE</span>
                                </div>
                                <a href={item.github_link} className={(item.github_link === 'N/A' ? 'github-hide-hyperlink' : 'github-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'github-site-div'}>
                                        <img src={git} className={'visit-site-icon'} />
                                        <span className={'github-site-text'}>GITHUB</span>
                                    </div>
                                </a>
                                <a href={item.project_link} className={(item.type === 'Mobile/PlayStore' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'play-store-div'}>
                                        <img src={git} className={'play-store-icon'} />
                                    </div>
                                </a>
                                <a href={item.project_link} className={(item.type === 'Mobile/Youtube' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'youtube-site-div'}>
                                        <img src={git} className={'youtube-site-icon'} />
                                        <span className={'youtube-site-text'}>YOUTUBE VIDEO</span>
                                    </div>
                                </a>
                                <a href={item.project_link} className={((item.type === 'Web' || item.type === 'Mobile/Blog') && item.project_link !== 'N/A' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'visit-site-div'}>
                                        <img src={git} className={'visit-site-icon'} />
                                        <span className={'visit-site-text'}>VISIT SITE</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal>
            )
        }
    }

    render() {
        // var results = JSON.parse(JSON.stringify(this.props.projects)).data;

        return (
            <div className={'projects-parent-container'}>
                <div className={'project-child-container'}>
                    <div className={'projects-tab-container'}>
                        {this.state.tabItem.map(data =>
                            <div key={data} className={'tab-container'} onClick={this.setSelectedTab.bind(this, data)}>
                                <span className={this.state.selectedItem === data ? 'tab-selected-label' : 'tab-label'}>{data}</span>
                                <div className={this.state.selectedItem === data ? 'tab-selected' : 'tab-unselected'}></div>
                            </div>
                        )}
                    </div>
                  
                </div>
                {this.openProjectDialog()}
            </div>
        );
    }
}

export default ProjectComp
