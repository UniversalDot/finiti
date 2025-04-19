import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import MarketGraph from './MarketGraph';
import Widgets from './Widgets';
import BuySellCoin from './BuySellCoin';
import Market from './Market';


const BuySell = () => {
    document.title="Buy & Sell | Infinite Insights. Finite Decisions. ";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div class="alert alert-warning alert-dismissible alert-label-icon label-arrow fade show" role="alert">
                        <i class="ri-alert-line label-icon"></i><strong>Warning</strong> - This page is currently under development. Some features may be incomplete or unavailable—please check back soon for updates!
                        <button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
                    </div>
                    <BreadCrumb title="Buy & Sell" pageTitle="Crypto" />
                    <Row>
                        <Widgets />
                    </Row>
                    <Row>
                        <MarketGraph dataColors='["--vz-success", "--vz-danger"]' />
                        <BuySellCoin />
                    </Row>
                    <Market />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BuySell;