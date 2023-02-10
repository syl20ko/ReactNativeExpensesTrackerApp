import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

function ExpensesSummary({expenses, periodName}) {

    /* reduce est une fonction native de JS qui s'applique sur un array */
    /* permet de calculer dans l'objet expenses le montant total en addition la prop amount */
    /* le paramète 0 permet de démarer le compteur à 0 */
    const expensesSum = expenses.reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* toFixed permet de recup des décimal 2 , pour 2 decimaux */}
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius : 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period:{
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})