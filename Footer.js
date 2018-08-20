import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import Aux from '../hoc/Aux'


class Footer extends Component {
    render() {
        return(
            <Aux>
            <footer class="py-5 bg-dark">
			<div class="container">
				<p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
			</div>
    		</footer>
    		</Aux>
        );
    };
}

export default Footer;