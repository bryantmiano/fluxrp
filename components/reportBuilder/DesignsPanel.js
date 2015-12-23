import React from 'react';
import selectDesign from '../../actions/selectDesign';
import TemplateStore from '../../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';

class DesignsPanel extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    }

    onDesignClick(design) {
        this.context.executeAction(selectDesign, {design: design});
    }

    render() {
        var designList = this.props.template ?
            this.props.template.designs.map(function (design) {
                return (
                    <div className='ui card' key={design.id} onClick={this.onDesignClick.bind(this, design)}>
                        <div className='image'>
                            <img src="/public/img/thumb.png"/>
                        </div>
                        <div className="content">
                            <h3 className="header">{design.name}</h3>
                        </div>
                    </div>
                )
            }, this) : null;


        return (
            <div className={this.props.className}>
                {designList}
            </div>
        );
    }
}

export default connectToStores(
    DesignsPanel,
    [TemplateStore],
    function (context, props) {
        var templateStore = context.getStore(TemplateStore);

        return {
            template: templateStore.getSelectedTemplate()
        };
    }
);
