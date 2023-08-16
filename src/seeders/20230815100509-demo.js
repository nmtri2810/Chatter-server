module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("User_Profiles", [
            {
                email: "example@example.com",
                phone_number: "123",
                password: "password",
                first_name: "John",
                last_name: "Doe",
                gender: "0",
                dob: "20021028",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("User_Profiles", null, {});
    },
};
