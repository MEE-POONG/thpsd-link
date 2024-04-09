import { PDFViewer, Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';



// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 24,
    },
    headpage: {

    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.body} >
            <View style={styles.section}>
                <Text style={styles.title}>
                    MPT
                </Text>

            </View>
        </Page>
    </Document>
);

const PDFPage = () => (
    <div style={{ width: '90vmin', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PDFViewer style={{ width: '100%', height: '100%' }}>
            <MyDocument />
        </PDFViewer>
    </div>
);

export default PDFPage;
