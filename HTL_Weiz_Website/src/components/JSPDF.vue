<template>
    <div id="jspdf-demo" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card card-body">
                    <div class="form-group">
                        <div class="uk-margin">
                            <div uk-form-custom="target: > * > span:first-child">
                                <select aria-label="Custom controls" v-model="selectedOption">
                                    <option value="">Zweck</option>
                                    <option value="Option 01">Option 01</option>
                                    <option value="Option 01">Option 02</option>
                                    <option value="Option 01">Option 03</option>
                                    <option value="Option 01">Option 04</option>
                                </select>
                                <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                    <span></span>
                                    <span uk-icon="icon: chevron-down"></span>
                                </button>
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-form-controls">
                                <input class="uk-input" id="form-heading" type="text" v-model="name" placeholder="Überschrift">
                            </div>
                        </div>
                        <div class="uk-margin">
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-paragraph" type="text" v-model="paragraph" placeholder="Absatz">
                                </div>
                            </div>
                        <button class="uk-button uk-button-default" @click="downloadPDF">
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import jsPDF from "jspdf";

export default {
    name: "JSPDF",
    data() {
        return {
            name: "",
            selectedOption: "",
            paragraph: "",
        };
    },
    methods: {
        downloadPDF() {
            let pdfName = "test";
            var doc = new jsPDF();
            doc.text(this.name, 10, 10);
            doc.text("Zweck: " + this.selectedOption, 10, 20);
            doc.text(this.paragraph, 10, 30);

            doc.save(pdfName + ".pdf");
        },

    },
};
</script>
