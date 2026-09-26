import styles from "./cyberpunk.module.css";

import Navbar from "@/app/navbar";

export default function CyberpunkUI() {
    return (
        <div className={styles.page}>
            <Navbar />

            <header className={styles.hero}>
                <p className={styles.eyebrow}>UIVERSE / CYBERPUNK</p>
                <h1>Cyberpunk UI</h1>
                <p>
                    Uma interface inspirada em cidades futuristas, tecnologia,
                    neon e sistemas digitais de alta tecnologia.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Botões</h2>

                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Executar
                        </button>

                        <button className={styles.secondaryButton}>
                            Cancelar
                        </button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Card</h2>

                    <div className={styles.card}>
                        <p className={styles.cardCategory}>SYSTEM / CYBER</p>

                        <h3 className={styles.cardTitle}>
                            Card de Cyberpunk UI
                        </h3>

                        <p className={styles.cardText}>
                            Essa é uma demonstração de texto em Cyberpunk UI.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Input</h2>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Digite um comando..."
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

                    <span className={styles.badge}>ONLINE</span>
                </section>

                <section className={styles.section}>
                    <h2>Alert</h2>

                    <div className={styles.alert}>
                        <strong>SYSTEM ALERT</strong>

                        <p>
                            Essa é uma mensagem de exemplo dentro do sistema.
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
                        <option>Selecione uma opção</option>
                        <option>Opção 1</option>
                        <option>Opção 2</option>
                        <option>Opção 3</option>
                    </select>
                </section>

                <section className={styles.section}>
                    <h2>Modal</h2>

                    <div className={styles.modal}>
                        <p className={styles.modalCategory}>
                            CYBER / SYSTEM
                        </p>

                        <h3>Cyberpunk Modal</h3>

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
                        title="Esse é um tooltip Cyberpunk"
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
                <p>UIVerse • Cyberpunk UI</p>
            </footer>
        </div>
    );
}