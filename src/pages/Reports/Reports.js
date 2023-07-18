/**
* @LuisStarlino
* Created AT: 02/04/2023 | 19:55
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { COLORS, GENERAL_STYLE, SIZES } from '../../utilities/routes';
import { headerReports, mainContainer, intervalStyle, reportLineStyle } from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryClipContainer, VictoryLabel } from "victory-native";

const Reports = ({ navigation, route }) => {

    //------------------------------------------------
    // --- COSNT'S
    //------------------------------------------------
    const [activeTab, setActiveTab] = useState('week');

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderHeader() {
        return (
            <View style={headerReports.containerHeader}>

                {/* GO BACK */}
                <TouchableOpacity style={headerReports.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name={"arrow-left"} color={COLORS.BLUE} size={30} />
                </TouchableOpacity>

                {/* MENU */}
                <TouchableOpacity style={headerReports.btnBack} onPress={() => { console.log("Abrir Menu") }}>
                    <Icon name={"menu"} color={COLORS.BLUE} size={30} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIntervals() {
        return (
            <View style={intervalStyle.container}>
                <TouchableOpacity style={activeTab === "week" ? intervalStyle.btnAtv : intervalStyle.btn}
                    onPress={(() => { setActiveTab('week') })}
                >
                    <Text style={activeTab === "week" ? intervalStyle.txtAtv : intervalStyle.txt}>Semana</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeTab === "month" ? intervalStyle.btnAtv : intervalStyle.btn}
                    onPress={(() => { setActiveTab('month') })}
                >
                    <Text style={activeTab === "month" ? intervalStyle.txtAtv : intervalStyle.txt}>Mês</Text></TouchableOpacity>

                <TouchableOpacity style={activeTab === "year" ? intervalStyle.btnAtv : intervalStyle.btn}
                    onPress={(() => { setActiveTab('year') })}
                >
                    <Text style={activeTab === "year" ? intervalStyle.txtAtv : intervalStyle.txt}>Ano</Text></TouchableOpacity>
            </View>
        )
    }

    function renderRepApts() {
        return (
            <View style={reportLineStyle.container}>

                {/* MAIN STATISTICS */}
                <View style={reportLineStyle.header}>
                    {/* TEXTS AND ICON */}
                    <View style={reportLineStyle.line1}>
                        <View>
                            <Text style={reportLineStyle.mainTxt}>87</Text>
                            <Text style={reportLineStyle.txt}>Consultas</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={reportLineStyle.iconArea} >
                                <Icon2 name={"trophy"} color={COLORS.WHITE_SMOKE} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* SMALL PORCENTS */}
                    <View style={reportLineStyle.line2}>
                        <Text style={reportLineStyle.smallTxt}>+13</Text>
                        <View style={reportLineStyle.porcentArea}>
                            <Icon3 name={"up"} color={'green'} size={20} />
                            <Text style={reportLineStyle.porcentTxt}>27%</Text>
                        </View>
                    </View>
                </View>



                <VictoryChart minDomain={{ y: 0 }} domainPadding={10} padding={60} >
                    <VictoryLine
                        groupComponent={<VictoryClipContainer clipPadding={{ top: 50, right: 10 }} />}
                        labels={({ datum }) => datum.y}
                        labelComponent={<VictoryLabel dy={-15} dx={0} />}
                        interpolation="natural"
                        data={[
                            { x: "Segunda", y: 5 },
                            { x: "Terca", y: 20 },
                            { x: "Quarta", y: 7 },
                            { x: "Quinta", y: 40 },
                            { x: "Sexta", y: 25 }
                        ]}
                    />
                </VictoryChart>
            </View>
        )
    }


    return (
        <ScrollView style={mainContainer.container}>

            {/* HEADER */}
            {renderHeader()}

            {/* TITLE */}
            <View style={{ marginTop: 30 }}>
                <Text style={[GENERAL_STYLE.title,
                    //{fontSize: SIZES.H1 * .8}
                ]}>Relatórios</Text>
            </View>

            {/* REPORTS INTERVAL */}
            {renderIntervals()}

            {/* RENDER REPORT APPOINTMENTS */}
            {renderRepApts()}

        </ScrollView>
    )
}

export default Reports;