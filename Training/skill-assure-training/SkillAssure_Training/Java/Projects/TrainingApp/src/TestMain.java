import java.util.ArrayList;
import java.util.List;

public class TestMain {

	public static void main(String[] args) {
		// create an organization
		
		Organization org = new Organization("Pratian");
		
		//Create a training
		Training training1 = new Training("Java program");
		
		//create a trainer and course
		Trainer trainer = new Trainer(1, "Sowmya", org);
		
		Course course = new Course("Java");
		
		//Adding trainer and course to training
		training1.setTrainer(trainer);
		training1.setCourse(course);
		
		//Create a trainee
		List<Trainee> trainees = new ArrayList<Trainee>();
		trainees.add(new Trainee(1, "Vaibhav", trainer));
		trainees.add(new Trainee(2, "Shwetha", trainer));
		trainees.add(new Trainee(3, "Rahul", trainer));
		trainees.add(new Trainee(4, "Pujari", trainer));
		trainees.add(new Trainee(5, "Vishnu", trainer));
		
		//Add trainees to training
		training1.setTrainees(trainees);
		
		//Create Module
		Module mod1 = new Module("OO Programming");
		Module mod2 = new Module("Core Java");
		
		
		//Create Unit and Topic
		Unit unit1 = new Unit("Relationship", 15);
		Unit unit2 = new Unit("Collections", 50);
		
		Topic topic1 = new Topic("Is-A");
		Topic topic2 = new Topic("Threads");
		
		//add module to course
		course.getModules().add(mod1);
		course.getModules().add(mod2);
		
//		List<Module> modules = new ArrayList<Module>();       
//		modules.add(mod1);
//		modules.add(mod2);
//		
//		course.setModules(modules);
		
		List<Unit> units = new ArrayList<Unit>();
		//add units to module
		units.add(unit1);
		units.add(unit2);
		
		mod1.setUnits(units);
		mod2.setUnits(units);
		
		//Add topics to units
		List<Topic> topics = new ArrayList<Topic>();
		
		topics.add(topic2);
		topics.add(topic1);
		
		unit1.setTopics(topics);
		unit2.setTopics(topics);
		
		
		System.out.println("Organization Name : " + training1.getTrainingOrgName());
		System.out.println("Total no of trainees : " + training1.getNumberOfTrainees());
		System.out.println("Total duration : " + training1.getTrainingDurationInHrs());
		
		
		
		
		
				
		
		
		
		
		
	}

}
