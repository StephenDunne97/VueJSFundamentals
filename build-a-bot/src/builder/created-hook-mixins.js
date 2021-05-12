/* A mixin is used to reduce replication/duplication of code throughout your project.
For example, this created hook could be used to pull data from an API that is to be presented on a page.
If multiple pages require the same data, the same hook will be used. Therefore, you would include the hook in the mixin and then import the mixin to the components that are using it.
*/
export default { 
    created() {
        console.log('RobotBuilder Component Created');
    },
};