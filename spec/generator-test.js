
describe('inclausegeneratorのテスト',function(){
  beforeEach(function(){

  });
  afterEach(function(){
  });

  it('convertToStatementメソドのテスト',function(){
    expect(convertToStatement('test\n1\n2\n3')).toBe('WHERE\ntest IN\n(\n1,\n2,\n3\n)');
  });

}


)
