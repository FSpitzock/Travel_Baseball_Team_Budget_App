
import AddTransactionForm from "../components/Forms/MoneyIn";


export default function Home() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <h1 style={styles.title}>Funds Coming In</h1>

  
      {/* Add Transaction Form */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Add Transaction</h2>
        <AddTransactionForm />
      </section>
    </div>
  );
}

/* ===============================
   ✅ Inline Styles
================================ */
const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "30px",
  },
  title: {
    textAlign: "center" as const,
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "10px",
  },
  section: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
  },
};
