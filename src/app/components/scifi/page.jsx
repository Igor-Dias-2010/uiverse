import styles from "./scifi.module.css";

import Navbar from "@/app/navbar";

export default function SciFiUI() {
    return (
        <div className={styles.page}>
            <Navbar />

            <header className={styles.hero}>
                <p className={styles.eyebrow}>UIVERSE / SCI-FI HUD</p>
                <h1>Sci-Fi / HUD UI</h1>
                <p>
                    Uma interface inspirada em painéis de controle, sistemas
                    holográficos, tecnologia avançada e interfaces de ficção científica.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Botões</h2>

                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Ativar
                        </button>

                        <button className={styles.secondaryButton}>
                            Cancelar
                        </button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Card</h2>

                    <div className={styles.card}>
                        <p className={styles.cardCategory}>
                            SYSTEM / HUD
                        </p>

                        <h3 className={styles.cardTitle}>
                            Card de Sci-Fi / HUD UI
                        </h3>

                        <p className={styles.cardText}>
                            Essa é uma demonstração de texto em Sci-Fi / HUD UI.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Input</h2>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Inserir comando..."
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

                    <span className={styles.badge}>SYSTEM ONLINE</span>
                </section>

                <section className={styles.section}>
                    <h2>Alert</h2>

                    <div className={styles.alert}>
                        <strong>SYSTEM ALERT</strong>

                        <p>
                            Essa é uma mensagem de alerta do sistema.
                        </p>
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
                        <option>Selecione um sistema</option>
                        <option>Sistema 01</option>
                        <option>Sistema 02</option>
                        <option>Sistema 03</option>
                    </select>
                </section>

                <section className={styles.section}>
                    <h2>Modal</h2>

                    <div className={styles.modal}>
                        <p className={styles.modalCategory}>
                            HUD / CONTROL
                        </p>

                        <h3>Sci-Fi Modal</h3>

                        <p>
                            Essa é uma demonstração de uma janela modal.
                        </p>

                        <button className={styles.primaryButton}>
                            Fechar
                        </button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Tooltip</h2>

                    <button
                        className={styles.tooltip}
                        title="Esse é um tooltip Sci-Fi"
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
                <p>UIVerse • Sci-Fi / HUD UI</p>
            </footer>
        </div>
    );
}