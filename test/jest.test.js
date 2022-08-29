test("Starting assertives", () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11)
});

test('Starting Objects Jest', () => {
    const obj = {
        name: 'Luis',
        email: 'luis.mota@email.com'
    };

    expect(obj).toHaveProperty('email');
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Luis');
    expect(obj.name).toBe('Luis')

    const obj2 = {
        name: 'Luis',
        email: 'luis.mota@email.com'
    };

    expect(obj2).toStrictEqual(obj); //Sucess
    expect(obj2).toEqual(obj);      // Sucess
    // expect(obj2).toBe(obj);     // Failed
});
