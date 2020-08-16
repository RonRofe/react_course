import React, { Fragment, Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        };
        
        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use((request) => {
                this.setState({ error: null });
                return request;
            });
            this.resInterceptor = axios.interceptors.response.use((response) => response, (error) => this.setState({ error }));
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({ error: null });

        };

        render() {
            return (
                <Fragment>
                    <Modal
                        close={this.errorConfirmHandler}
                        show={!!this.state.error}>{!!this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Fragment>
            );
        }
    };
};

export default withErrorHandler;