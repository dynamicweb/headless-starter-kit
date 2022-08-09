import BlockBase from "./BlockBase";

export default class FeatureBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    connectedCallback() {
		this.classList.add('flow');
        
        const feature = document.createElement('template');
        feature.innerHTML = `
            <div class="d-flex" style="--gap: 1.5rem;">
                <div>
                    <div class="d-grid text-p-5 bg-p-1 p-4 rnd-circle">
                        <svg class="bi" width="24" height="24" fill="currentColor">
                            <use xlink:href="bootstrap-icons.svg#${this.getFieldValue('Icon')}"/>
                        </svg>
                    </div>
                </div>
                <div class="flow">
                    <h4 class="fs-4">${this.getFieldValue('Title')}</h4>
                    <div class="fs-4">${this.getFieldValue('Text')}</div>
                </div>            
            </div>
        `;

        this.append(feature.content.cloneNode(true));
    }
}

customElements.define('feature-block', FeatureBlock);