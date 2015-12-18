'use strict';

describe('pluralsight es6 course', function(){
	
	it('should allow inheritance', function(){
		class Person{
			constructor(name){
				this.name = name;
			}
			get name(){
				return this._name;
			}
			set name(name){
				this._name = name;
			}
		}
		
		class Employee extends Person{
			doWork(){
				return `${this._name} is working!`;
			}
		}
		
		let e1= new Employee("Mike");
		//e1.name = "Mike";
		expect(e1.doWork()).toBe("Mike is working!");
		
	})
	
})