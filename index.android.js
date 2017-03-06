/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  Text,
  Navigator,
  ScrollView,
  View
} from 'react-native';

import { DrawerLayoutAndroid } from 'react-native';
import Icon                 from 'react-native-vector-icons/Ionicons';
var charDetails = require('./charDetails');
import Router from 'react-native-simple-router';



class firstSquad extends Component {
	
	
	constructor(props) {
	super(props);
	this.Usagent = this.Usagent.bind(this);
	this.Moonstone = this.Moonstone.bind(this);
	this.Hulk = this.Hulk.bind(this);

	this.secondSquad = this.secondSquad.bind(this);
}




secondSquad() {
	this.props.toRoute({
	name: "secondSquad",
	component: secondSquad
});
}





Usagent() {
	this.props.toRoute({
	name: "Usagent",
	component: Usagent
});
}

Moonstone() {
	this.props.toRoute({
	name: "Moonstone",
	component: Moonstone
});
}

Hulk() {
	this.props.toRoute({
	name: "Hulk",
	component: Hulk
});
}
	
	
	
	
	
    render () {
		var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Choose your side</Text>
	  
	  <Button onPress={this.secondSquad}
	  title="2nd Squad"
	  />
    </View>
  );
    return (
	<DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
    
	
	
      <ScrollView>
          <Text style={{fontSize:96}}>1st Squad</Text>
<TouchableHighlight onPress={this.Usagent} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/usagent.jpg')} />

	</TouchableHighlight>
	
	<TouchableHighlight onPress={this.Moonstone} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/moonstone.jpg')} />

	</TouchableHighlight>
	
	<TouchableHighlight onPress={this.Hulk} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/hulk.jpg')} />

	</TouchableHighlight>

	
	
	
          
        </ScrollView>
		</DrawerLayoutAndroid>
		

    )
  }      
}






	const firstRoute = {
	name: 'Welcome',
	component: firstSquad,
};
  
  
  
  
 class Avengers extends React.Component {

 render() {
	return (
	<Router
	firstRoute={firstRoute}
	
	/>
	);
	}
} 
  
  
  
  

class secondSquad extends Component {
	
	
	constructor(props) {
	super(props);
	this.Wolverine = this.Wolverine.bind(this);
	this.Hawkeye = this.Hawkeye.bind(this);
	this.Spiderman = this.Spiderman.bind(this);
	this.firstSquad = this.firstSquad.bind(this);
	
}

firstSquad() {
	this.props.toRoute({
	name: "firstSquad",
	component: firstSquad
});
}




Wolverine() {
	this.props.toRoute({
	name: "Wolverine",
	component: Wolverine
});
}

Hawkeye() {
	this.props.toRoute({
	name: "Hawkeye",
	component: Hawkeye
});
}

Spiderman() {
	this.props.toRoute({
	name: "Spiderman",
	component: Spiderman
});
}
	
	
	
	
	
    render () {
		var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Choose your side</Text>
	  <Button onPress={this.firstSquad}
	  title="1st Squad"
	  />
	 
    </View>
  );
    return (
	
	
	<DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <ScrollView>
          <Text style={{fontSize:96}}>2nd Squad</Text>
<TouchableHighlight onPress={this.Wolverine} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/wolverine.jpg')} />

	</TouchableHighlight>
	
	<TouchableHighlight onPress={this.Hawkeye} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/hawkeye.jpg')} />

	</TouchableHighlight>
	
	<TouchableHighlight onPress={this.Spiderman} underlayColor="transparent">
	          <Image style={styles.mainImage} source={require('./images/spiderman.jpg')} />

	</TouchableHighlight>

          
        </ScrollView>
	</DrawerLayoutAndroid>
    )
  }      
}


//Avengers layout

class Wolverine extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 2",
	component: secondSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> Wolverine </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/wolverine.jpg')} />
	<Text style={styles.instructions}>Wolverine was born James Howlett in Cold Lake, Alberta, Canada, during the late 1880s, purportedly to rich farm owners John and Elizabeth Howlett though he is actually the illegitimate son of the Howletts' groundskeeper, Thomas Logan. After Thomas is thrown off the Howletts' property for an attempted rape perpetrated by his other son, named simply Dog, he returns to the Howlett manor and kills John Howlett. In retaliation, young James kills Thomas with bone claws that emerge from the back of his hands, as his mutation manifests. He flees with his childhood companion, Rose, and grows into manhood on a mining colony in the Yukon, adopting the name "Logan". When Logan accidentally kills Rose with his claws, he flees the colony and lives in the wilderness among wolves, until he is captured and placed in a circus. Saul Creed, brother of Victor Creed, frees Logan, but after he betrays Logan and Clara Creed to Nathaniel Essex, Logan drowns Creed in Essex's potion. Logan returns to civilization, residing with the Blackfoot people. Following the death of his Blackfoot lover, Silver Fox, at the hands of Victor Creed, now known as Sabretooth, he is ushered into the Canadian military during World War I. Logan spends time in Madripoor before settling in Japan, where he marries Itsu and has a son, Daken. Logan is unaware of his son for many years.
During World War II, Logan teams up with Captain America and continues a career as a soldier of fortune. He serves with the 1st Canadian Parachute Battalion during D-Day, and later with the CIA before being recruited by Team X, a black ops unit.</Text>
	
	
	</ScrollView>
	);
	}
}




class Usagent extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 1",
	component: firstSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> U.S Agent </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/usagent.jpg')} />
	<Text style={styles.instructions}>John Walker was born in the fictional town of Custer's Grove, Georgia. He grew up idolizing his older brother, Mike, a helicopter pilot who died in the Vietnam War. John wanted to honor his brother's memory by enlisting in the military, becoming a soldier himself.
After John received an honorable discharge from the United States Army, he was told by a friend about the Power Broker, a mysterious individual who gave people superhuman abilities. Walker and his friend received treatments that granted him superhuman abilities.</Text>
	
	
	</ScrollView>
	);
	}
}





class Moonstone extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 1",
	component: firstSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> Moonstone </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/moonstone.jpg')} />
	<Text style={styles.instructions}>Karla Sofen was born in Van Nuys, California. She grew up in the mansion of Hollywood producer Charles Stockbridge, as the child of the butler Karl Sofen. After her father's death, her mother Marion Sofen worked three jobs to put her daughter through college, and Karla vowed never to end up like her mother and that she would never put another's needs before her own. Despite building a successful practice as a psychologist and psychiatrist, Karla so disliked being dependent on her patients for income that she entered the super-criminal world as an aide to Doctor Faustus. Learning of Lloyd Bloch (aka the original Moonstone), she became the supervillain's psychologist and manipulated him into rejecting the source of his powers, an extraterrestrial gem of considerable power, which she then acquired and absorbed to gain the powers of Moonstone. She then battled the Hulk.
It has been revealed Karla murdered her mother by suffocating her and then set her house on fire. It has also been said that during Sofen's career as a psychologist, she convinced depressed patients to kill themselves while she watched, and was "instrumental in the therapeutic hospitalization of six more".</Text>
	
	
	</ScrollView>
	);
	}
}





class Hulk extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 1",
	component: firstSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> Hulk </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/hulk.jpg')} />
	<Text style={styles.instructions}>During the experimental detonation of a gamma bomb, scientist Bruce Banner saves teenager Rick Jones who has driven onto the testing field; Banner pushes Jones into a trench to save him, but is hit with the blast, absorbing massive amounts of gamma radiation. He awakens later seemingly unscathed, but that night transforms into a lumbering grey form. A pursuing soldier dubs the creature a "hulk". Originally, Banner transformed into the Hulk at sunset and reverted at sunrise. Banner was cured in The Incredible Hulk #4, but chose to restore Hulk's powers with Banner's intelligence. The gamma-ray machine needed to affect the transformation-induced side effects that made Banner temporarily sick and weak when returned to his normal state.</Text>
	
	
	</ScrollView>
	);
	}
}











class Hawkeye extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 2",
	component: secondSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> Hawkeye </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/hawkeye.jpg')} />
	<Text style={styles.instructions}>Clint Barton was born in Waverly, Iowa. At a young age he lost both of his parents in a car accident. After six years in an orphanage, Clint and his brother Barney ran away to join the Carson Carnival of Travelling Wonders. Clint soon caught the eye of the Swordsman, who took the young boy on as his assistant. Along with the help of Trick Shot, the Swordsman trained Clint to become a master archer. Clint later found the Swordsman embezzling money from the carnival. Before he could turn his mentor over to the authorities, Clint was beaten and left for dead, allowing the Swordsman to escape town. Clint's relationship with his brother Barney and Trick Shot soon deteriorated as well.
Clint adapted his archery skills to become a star carnival attraction, a master archer called "Hawkeye", otherwise known as "The World's Greatest Marksman". He spent some time as a member of Tiboldt's Circus, before joining the Coney Island Circus. He witnessed Iron Man in action and was inspired to become a costumed hero. However, after a misunderstanding on his first outing, Hawkeye was accused of theft and believed to be a criminal. On the run, the naive Hawkeye met the Black Widow, a spy for the Soviet Union, with whom he fell in love. Blindly following the Black Widow, Hawkeye aided her attempts to steal technology developed by Tony Stark. In one of their battles with Iron Man, the Black Widow was seriously injured. Hawkeye rescued her and fled the battle to save her life. But before Hawkeye could take her to a hospital, the Black Widow disappeared. Hawkeye decided to be a "straight-shooter" from then on.</Text>
	
	
	</ScrollView>
	);
	}
}






class Spiderman extends React.Component {

constructor(props) {
	super(props);
	this.back = this.back.bind(this);
}

back() {
	this.props.toRoute({
	name: "Squad 2",
	component: secondSquad
});
}


render() {
	return (
	<ScrollView>
	<Button onPress={this.back} title='Back'>Back </Button>
	
	<Text style={styles.welcome}> Spiderman </Text>
	
	          <Image style={styles.avengersImage} source={require('./images/spiderman.jpg')} />
	<Text style={styles.instructions}>In Forest Hills, Queens, New York, high school student Peter Parker is a science-whiz orphan living with his Uncle Ben and Aunt May. As depicted in Amazing Fantasy #15 (Aug. 1962), he is bitten by a radioactive spider (erroneously classified as an insect in the panel) at a science exhibit and "acquires the agility and proportionate strength of an arachnid". Along with super strength, Parker gains the ability to adhere to walls and ceilings. Through his native knack for science, he develops a gadget that lets him fire adhesive webbing of his own design through small, wrist-mounted barrels. Initially seeking to capitalize on his new abilities, Parker dons a costume and, as "Spider-Man", becomes a novelty television star. However, "He blithely ignores the chance to stop a fleeing thief, [and] his indifference ironically catches up with him when the same criminal later robs and kills his Uncle Ben." Spider-Man tracks and subdues the killer and learns, in the story's next-to-last caption, "With great power there must also come-great responsibility!"
Despite his superpowers, Parker struggles to help his widowed aunt pay rent, is taunted by his peers-particularly football star Flash Thompson-and, as Spider-Man, engenders the editorial wrath of newspaper publisher J. Jonah Jameson. As he battles his enemies for the first time, Parker finds juggling his personal life and costumed adventures difficult. In time, Peter graduates from high school, and enrolls at Empire State University (a fictional institution evoking the real-life Columbia University and New York University), where he meets roommate and best friend Harry Osborn, and girlfriend Gwen Stacy, and Aunt May introduces him to Mary Jane Watson. As Peter deals with Harry's drug problems, and Harry's father is revealed to be Spider-Man's nemesis the Green Goblin, Peter even attempts to give up his costumed identity for a while. Gwen Stacy's father, New York City Police detective captain George Stacy is accidentally killed during a battle between Spider-Man and Doctor Octopus (#90, Nov. 1970).</Text>
	
	
	</ScrollView>
	);
	}
}




 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  mainImage: {
	  width: 450,
	  height: 250,
	 
  },
  
  avengersImage: {
	  width: 450,
	  height: 250,
	  top: 0,
	  
	  
	 
	 
  },
  
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
	fontSize: 19,
    marginBottom: 12,
  },
});
AppRegistry.registerComponent('Avengers', () => Avengers);
