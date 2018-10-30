package com.su.test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

import org.junit.Test;

public class PathTest {
	@Test
	public void t1() {
		String path = getClass().getClassLoader().getResource("maskWord.txt").getPath();
		File file = new File(path);
		try {
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String line = reader.readLine();
			String[] split = line.split(",");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
