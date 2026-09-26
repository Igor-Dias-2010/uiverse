import styles from "./monochrome.module.css";

import Navbar from "@/app/navbar";

export default function MonochromeUI() {
    return (
        <div className={styles.page}>
            <Navbar />

            <header className={styles.hero}>
                <p className={styles.eyebrow}>UIVERSE / MONOCHROME</p>
                <h1>Monochrome UI</h1>
                <p>
                    Uma interface baseada em uma única escala de cores,
                    utilizando contraste, formas e tipografia para criar
                    hierarquia visual.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Botões</h2>

                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Primário
                        </button>

                        <button className={styles.secondaryButton}>
                            Secundário
                        </button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Card</h2>

                    <div className={styles.card}>
                        <p className={styles.cardCategory}>
                            DESIGN / MONOCHROME
                        </p>

                        <h3 className={styles.cardTitle}>
                            Card de Monochrome UI
                        </h3>

                        <p className={styles.cardText}>
                            Essa é uma demonstração de texto em Monochrome UI.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Input</h2>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Digite algo..."
                    />
                </section>

                <section className={styles.section}>
                    <h2>Checkbox</h2>

                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Opção selecionada</span>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Toggle</h2>

                    <label className={styles.toggle}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Badge</h2>

                    <span className={styles.badge}>MONOCHROME</span>
                </section>

                <section className={styles.section}>
                    <h2>Alert</h2>

                    <div className={styles.alert}>
                        <strong>System Message</strong>

                        <p>Essa é uma mensagem de exemplo dentro do layout.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Progress Bar</h2>

                    <div className={styles.progress}>
                        <div className={styles.progressBar}></div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Select</h2>

                    <select className={styles.select}>
                        <option>Selecione uma opção</option>
                        <option>Opção 1</option>
                        <option>Opção 2</option>
                        <option>Opção 3</option>
                    </select>
                </section>

                <section className={styles.section}>
                    <h2>Modal</h2>

                    <div className={styles.modal}>
                        <p className={styles.modalCategory}>MONO / SYSTEM</p>

                        <h3>Monochrome Modal</h3>

                        <p>Essa é uma demonstração de uma janela modal.</p>

                        <button className={styles.primaryButton}>Fechar</button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Tooltip</h2>

                    <button
                        className={styles.tooltip}
                        title="Esse é um tooltip Monochrome"
                    >
                        Passe o mouse
                    </button>
                </section>

                <section className={styles.section}>
                    <h2>Pagination</h2>

                    <div className={styles.pagination}>
                        <button>&lt;</button>
                        <button className={styles.activePage}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>&gt;</button>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>UIVerse • Monochrome UI</p>
            </footer>
        </div>
    );
}
