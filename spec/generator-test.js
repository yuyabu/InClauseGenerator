
describe('inclausegeneratorのテスト',function(){
  beforeEach(function(){

  });
  afterEach(function(){
  });

  it('test for number type',function(){
    expect(convertToStatement('test\n1\n2\n3')).toBe('WHERE\ntest IN\n(\n1,\n2,\n3\n)');
  });
  it('test for char type',function(){
    expect(convertToStatement('test\n1\n2\n3','char')).toBe("WHERE\ntest IN\n(\n'1',\n'2',\n'3'\n)");
  });
  it('called with no arguments',function(){
    expect(convertToStatement("","")).toBe("");
  });


}


)
